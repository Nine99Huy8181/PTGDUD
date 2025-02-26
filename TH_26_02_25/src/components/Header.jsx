import searchImg from '../img/icons8-search-30.png';
import imgGroup from "../img/Group 15.png";
import imgAvt from "../img/Avatar 35.png";

export default function Header() {
    const styles = {
        container: { display: "flex" },
        imgPadding: { padding: "10px 20px" },
        searchContainer: { display: "flex", paddingTop: "10px" },
        inputStyle: {
            border: "0px",
            height: "30px",
            marginBottom: "20px",
            width: "250px",
            backgroundColor: "rgba(128, 128, 128, 0.212)"
        },
        navList: { display: "flex", listStyleType: "none" },
        navItem: {
            textDecoration: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            color: "gray"
        },
        buttonStyle: {
            backgroundColor: "#f44b87",
            color: "rgb(255, 2, 171)",
            padding: "10px 20px",
            borderRadius: "10px",
            border: "0px",
            height: "50px"
        },
        avatarStyle: { marginLeft: "50px" }
    };

    return (
        <div style={styles.container}>
            <div><img src={imgGroup} alt="" style={styles.imgPadding} /></div>
            <div style={styles.searchContainer}>
                <div><img src={searchImg} alt="" /></div>
                <div><input type="text" placeholder="abc" style={styles.inputStyle} /></div>
            </div>
            <div style={styles.navContainer}>
                <ul style={styles.navList}>
                    <li><a style={styles.navItem} href="">What to cook</a></li>
                    <li><a style={styles.navItem} href="">Recipes</a></li>
                    <li><a style={styles.navItem} href="">Ingredients</a></li>
                    <li><a style={styles.navItem} href="">Occasions</a></li>
                    <li><a style={styles.navItem} href="">About Us</a></li>
                </ul>
            </div>
            <div><button style={styles.buttonStyle}>Your Recipe Box</button></div>
            <div><img src={imgAvt} alt="" style={styles.avatarStyle} /></div>
        </div>
    );
}
