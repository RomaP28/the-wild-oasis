import {useState} from "react";
import Button from "../../ui/Button.jsx";
// import CreateCabinForm from "./CreateCabinForm.jsx";
import Modal from "../../ui/Modal.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";

function AddCabin() {
	const [isOpenModal, setIsOpenModal] = useState(false);
	
	return (
		<>
			<Button onClick={()=>setIsOpenModal(show => !show)}>Add new cabin</Button>
			{isOpenModal &&
				<Modal onCLose={() => setIsOpenModal(false)}>
					<CreateCabinForm onCLose={() => setIsOpenModal(false)} />
				</Modal>}
		</>
	)
}

export default AddCabin;