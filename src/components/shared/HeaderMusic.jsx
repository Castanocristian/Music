import { useSelector } from "react-redux";
import TrackList from "./TrackList";

export const HeaderMusic = () => {

    const trackPlayList = useSelector(store => store.tracks)
    
  return (
    <header>
        <h1>Git Music</h1>
        <form>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" />
            </div>
            <div>
                <label htmlFor="to">To</label>
                <input type="text" id="to" />
            </div>
            <div>
                <label htmlFor="title">Title</label>
                <textarea id="message" />
            </div>
            <div>
                {   
                    trackPlayList.map(track =>(
                        <TrackList
                            key={track.id}
                            track={track}
                        />
                    ))
                }
            </div>
            <button>Create</button>
        </form>
    </header>
  );
};

export default HeaderMusic;
