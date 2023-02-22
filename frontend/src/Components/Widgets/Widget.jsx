import "./Widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';

const Widget = ({ type }) => {
    let data;
    switch(type){
        case "inquiry":
            data={
                title:"INQUIRIES",
                total:934,
                link:"See all inquiries",
                icon: <PsychologyAltOutlinedIcon className="icon"
                style={{ 
                    color:"green",
                    backgroundColor:"rgba(0, 128, 0, 0.2)",
                }}
            />
            }
            break;
        case "student":
            data={
                title:"STUDENTS",
                total:734,
                link:"See all students",
                icon: <PersonOutlineOutlinedIcon className="icon"
                    style={{ 
                        color:"crimson",
                        backgroundColor:"rgba(255, 0, 0, 0.2)",
                    }}
                />
            }
            break;
        case "trainer":
                data={
                    title:"TRAINERS",
                    total:14,
                    link:"See all trainers",
                    icon: <PersonIcon className="icon"
                        style={{ 
                            color:"goldenrod",
                            backgroundColor:"rgba(218, 165, 32, 0.2)",
                        }}
                    />
                }
                break;
        case "course":
                data={
                        title:"COURSES",
                        total:8,
                        link:"See all courses",
                        icon: <LibraryBooksOutlinedIcon className="icon"
                            style={{ 
                                color:"purple",
                                backgroundColor:"rgba(128, 0, 128, 0.2)",
                            }}
                        />
                }
                break;
        default:
                break;
    }
    return(
        <div className="widget">
           <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.total}</span>
                <span className="link">{data.link}</span>
           </div>
           <div className="right">
                <div className="percentage">
                    <KeyboardArrowUpOutlinedIcon/>
                    20 %
                </div>
                {data.icon}
           </div>
        </div>
    )
}
export default Widget;