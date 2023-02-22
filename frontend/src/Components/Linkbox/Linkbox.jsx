import "./Linkbox.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Linkbox = ({type}) => {
  let data;
    switch(type){
        case "facebook":
            data={
                title:"Facebook",
                total:1734,
                link:"Followers",
                icon: <FacebookIcon 
                  className="icon"
                  style={{ 
                    color:"blue",
                    backgroundColor:"whitesmoke"
                  }}
                />
            }
            break;
        case "twitter":
            data={
                title:"Twitter",
                total:1900,
                link:"Followers",
                icon: <TwitterIcon 
                  className="icon"
                  style={{
                    color:"red", 
                    backgroundColor:"whitesmoke"
                  }}
                />,
            }
            break;
        case "instagram":
                data={
                    title:"Instagram",
                    total:1344,
                    link:"Followers",
                    icon: <InstagramIcon
                      className="icon"
                      style={{ 
                        color:"orange",
                        backgroundColor:"whitesmoke"
                      }}
                    />
                }
                break;
        case "linkedin":
                data={
                    title:"LinkedIn",
                    total:9800,
                    link:"Followers",
                    icon: <LinkedInIcon 
                      className="icon"
                      style={{ 
                        color:"green",
                        backgroundColor:"whitesmoke"
                      }}
                    />
                }
                break;
        default:
                break;
    }
  return (
    <div className="linkbox">
           <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.total}</span>
                <span className="link">{data.link}</span>
           </div>
           <div className="right">
                {data.icon}
           </div>
    </div>
  );
}

export default Linkbox;
