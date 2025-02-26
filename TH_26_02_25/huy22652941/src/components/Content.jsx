import imgStart1 from "../img/Rating 20.png";
import imgStart2 from "../img/Rating 19.png"; 
import imgStart3 from "../img/Rating 18.png"; 
import imgStart4 from "../img/Rating 17.png"; 
import imgStart5 from "../img/Rating 16.png";
import imgImg from "../img/Image 105.png";
import imgTime from "../img/Slider 2.png";
export default function Content() {
    const styles = {
        container: { display: "flex" },
        sidebar: { width: "400px" },
        filterBox: { width: "300px" },
        gridContainer: { display: "grid", gridTemplateColumns: "auto auto auto auto" },
        ratingContainer: { width: "400px" },
        buttonApply: {
            color: "white",
            border: "0px",
            borderRadius: "5px",
            width: "300px",
            height: "30px",
            backgroundColor: "#f44b87"
        },
        centerContent: { margin: "auto" },
        buttonStyle: {
            width: "100px",
            height: "30px",
            border: "0px",
            borderRadius: "10px",
            backgroundColor: "aquamarine",
            marginLeft: "10px"
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.sidebar}>
                <h3>FILTERS</h3>
                <div style={styles.filterBox}>
                    <h5>Type</h5>
                    <div style={styles.gridContainer}>
                        <input type="checkbox" /> <label>Pan-tried</label>
                        <input type="checkbox" /> <label>Str-tried</label>
                        <input type="checkbox" /> <label>Pan-tried</label>
                        <input type="checkbox" /> <label>Pan-tried</label>
                        <input type="checkbox" /> <label>Pan-tried</label>
                        <input type="checkbox" /> <label>Pan-tried</label>
                        <input type="checkbox" /> <label>Pan-tried</label>
                        <input type="checkbox" /> <label>Pan-tried</label>
                    </div>
                </div>
                <div>
                    <h5>Time</h5>
                    <img src={imgTime} alt="Time slider" />
                </div>
                <div style={styles.ratingContainer}>
                    <h5>Rating</h5>
                    <br /><input type="checkbox" /> <img src={imgStart3} alt="Rating 20" />
                    <br /><input type="checkbox" /> <img src={imgStart4} alt="Rating 19" />
                    <br /><input type="checkbox" /> <img src={imgStart2} alt="Rating 18" />
                    <br /><input type="checkbox" /> <img src={imgStart1} alt="Rating 17" />
                    <br /><input type="checkbox" /> <img src={imgStart5} alt="Rating 16" />
                </div>
                <div style={styles.ratingContainer}>
                    <button style={styles.buttonApply}>Apply</button>
                </div>
            </div>
            <div style={styles.centerContent}>
                <h2>Sorry, no results were found for "abc"</h2>
                <img src={imgImg} alt="No results" />
                <p>We have all your Independence Day sweets covered</p>
                <div>
                    <button style={styles.buttonStyle}>Sweet Cake</button>
                    <button style={styles.buttonStyle}>Black Cake</button>
                    <button style={styles.buttonStyle}>Pacle Cake</button>
                    <button style={styles.buttonStyle}>Healthy Cake</button>
                </div>
            </div>
        </div>
    );
}
