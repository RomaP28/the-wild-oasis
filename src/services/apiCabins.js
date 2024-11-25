import supabase, {supabaseUrl} from "./supabase.js";

export async function getCabins() {
	const { data, error } = await supabase
		.from('cabins')
		.select('*');
	
	if (error) {
		console.error(error)
		throw new Error("Cabins couldn't be loaded:");
	}
	
	return data;
}

export async function deleteCabin(id) {
	const { data, error } = await supabase
		.from('cabins')
		.delete()
		.eq('id', id)
	
	if (error) {
		console.error(error)
		throw new Error("Cabin couldn't be deleted");
	}
	
	return data;
}

// Create or Edit cabin
export async function createEditCabin(newCabin, id) {
	const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
	
	const imageName  = `${Math.random()}-${newCabin.image.name}`.replace("/", '');
	const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
	
	let query = supabase.from('cabins');
	// 1. A) Create cabin in database
	if(!id) query = query.insert([{ ...newCabin, image: imagePath}])
	//    B) Edit cabin in database
	if(id) query = query.update({ ...newCabin, image: imagePath}).eq('id', id)
	
	const { data, error } = await query.select().single();
	
	
	if (error) {
		console.error(error)
		throw new Error("Cabin couldn't be created");
	}
	
	// 2. Upload image to supabase bucket
	if (hasImagePath) return data;
	
	const { error: storageError } = await supabase.storage
		.from('cabin-images')
		.upload(imageName, newCabin.image);
	
	// 3. Delete cabin if there was an error uploading image
	if (storageError) {
		await supabase
			.from('cabins')
			.delete()
			.eq('id', data.id)
		throw new Error("Cabin image couldn't be uploaded and cabin was not created");
	}
	
	return data;
}
