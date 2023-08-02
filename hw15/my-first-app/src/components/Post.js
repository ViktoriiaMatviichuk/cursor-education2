import './Post.css';

export const Post = (props) =>{
const { author, content,icon,time,date,im,description,source,likeButton,heartButton,commentsButton,shareButton} = props;
    return(
      
            <div className="wraper" >
                <header className="header">
                    <div>
                        <img className="author-photo" src={author.photo} alt='photo'/>
                    </div>
                    <div className="author-inform">
                        <p className="author-name" > {author.name}</p>
                        <span  className="date"> {date} {time} <img className="icon" src={icon} alt='planet'/></span>
                    </div>
                </header>
                <div className="content">
                <div>  {content}</div>
                <img src={im} alt='car'/>
                </div>
                <footer>
                <div>  {source}</div>
                <p>  {description}</p>
                </footer>
               
                <div className="response"> 
                    <div className="coments">
                        <img src={likeButton} alt='likeButton'  />
                        <img src={heartButton} alt='heartButton'/>
                        <p>41</p>
                    </div>
                    <div className="coments">
                        <p>3</p>
                        <img src={commentsButton} alt='commentsButton'/>
                        <p>7</p>
                        <img src={shareButton}  alt='shareButton' />   
                    </div>
                </div>
            </div>
      
    )
}