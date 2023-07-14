import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from './PhotosList';

function AlbumsListitem({ album }) {

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    };
    const [ removeAlbum, results] = useRemoveAlbumMutation();
    const header = <div>
         <Button onClick={handleRemoveAlbum}>
            <GoTrashcan />
         </Button>
         {album.title}
         
          </div>;
    return (
    <ExpandablePanel key={album.id} header={header}>
        <PhotosList album={album} />

    </ExpandablePanel>
  )
  
}

export default AlbumsListitem;