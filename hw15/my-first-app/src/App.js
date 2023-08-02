
import './App.css';
import { Post } from './components/Post';

function App() {

 return (

    <Post 
      author={{
        name: "Meghan Markle",
        photo: "https://scontent.flwo3-1.fna.fbcdn.net/v/t39.30808-6/293327129_380079270906534_1775935539362433527_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=q-w5ExFrfE0AX8vv-zf&_nc_ht=scontent.flwo3-1.fna&oh=00_AfDWd9kR1JLeGYC-rLR10G_D0NWPUS8NcnFQHUdHsiX5gw&oe=64D0095F",
        nickname:  "@m_m"  
        }}
      icon="https://w7.pngwing.com/pngs/787/546/png-transparent-planet-earth-world-globe-computer-icons-world-icon-miscellaneous-logo-world-thumbnail.png"
      content="Meghan fondly remembers her first car 😍"
      im="https://i0.wp.com/theroyaluk.com/wp-content/uploads/2023/07/Has-Meghan-dropped-biggest-hint-yet-shes-moving-in-with-Harry.jpeg?w=925&ssl=1"   
      date={"23 липня"}
      time={"21:10"}
      description= "“Exploring Meghan Markle’s first car: A glimpse into Meghan’s early days”"
      source= "THEROYALUK.COM"
      likeButton= "https://image.similarpng.com/very-thumbnail/2020/06/Icon-like-button-transparent-PNG.png"
      heartButton="https://cdn.pixabay.com/photo/2020/09/30/07/48/heart-5614865_1280.png"
      commentsButton="https://w7.pngwing.com/pngs/557/856/png-transparent-black-speech-bubble-computer-icons-facebook-like-button-like-share-comment-rectangle-black-silhouette.png"
      shareButton="https://www.freepnglogos.com/uploads/share-png/arrow-invite-join-share-sharing-icon-15.png"
    > 
</Post>

  );
}

export default App;
