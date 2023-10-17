import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import s from "./style.module.css";
const MAX_TITLE_CHAR = 20;

export function TVShowListItem({tvShow, onClickItem}) {
  
  return (
    <div 
      className={s.container}
    onClick={() => onClickItem(tvShow)}
    >
      <img
        alt={tvShow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        className={s.img}
      />
      <div className={s.title}>
       {
        tvShow.name.length > MAX_TITLE_CHAR ? tvShow.name.substring(0, MAX_TITLE_CHAR) + "..." : tvShow.name
       }
      </div>
    </div>
  );
}
