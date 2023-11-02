import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onclose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[40px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="px-4 py-1 bg-red-300 rounded-lg">{book.publishYear}</h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">Anithing You want to show</p>
        <p className="my-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          quisquam ad voluptates possimus ut perspiciatis? Voluptatum iste
          tempora dolorem nulla exercitationem inventore ex magni, adipisci odio
          facere dolor aperiam enim consequuntur accusantium accusamus? Ratione
          aut nisi delectus! Totam id laudantium repellat, iure aliquam quidem
          porro quod explicabo aspernatur facilis illo sapiente incidunt ab
          accusamus nostrum impedit hic modi error culpa eum alias quia voluptas
          dolor non? Odit deserunt laborum vero, animi sequi quas, eaque
          voluptas reprehenderit quo cum labore provident. 
        </p>
      </div>
    </div>
  );
};

export default BookModal;
