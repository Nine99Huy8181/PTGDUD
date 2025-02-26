export default function Footer() {
    const styles = {
        container: {
            display: "flex",
            backgroundColor: "black",
            color: "white",
            justifyContent: "space-between",
            width: "100%"
        },
        leftSection: { marginLeft: "20px" },
        rightSection: { marginRight: "20px" },
        inputStyle: { width: "250px" },
        buttonStyle: {
            height: "30px",
            backgroundColor: "#f44b87",
            border: "0px",
            borderRadius: "5px"
        },
        listStyle: { listStyleType: "none" },
        linkStyle: { textDecoration: "none", color: "white" }
    };

    return (
        <div style={styles.container}>
            <div style={styles.leftSection}>
                <h3>About us</h3>
                <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro</p>
                <input type="text" style={styles.inputStyle} />
                <button style={styles.buttonStyle}>Send</button>
            </div>
            <div>
                <div>
                    <ul>
                        <h4>Learn more</h4>
                        <li style={styles.listStyle}><a style={styles.linkStyle} href="">Our Cooks</a></li>
                        <li style={styles.listStyle}><a style={styles.linkStyle} href="">See Our Features</a></li>
                        <li style={styles.listStyle}><a style={styles.linkStyle} href="">FAQ</a></li>
                    </ul>
                    <ul>
                        <h4>Learn more</h4>
                        <li style={styles.listStyle}><a style={styles.linkStyle} href="">Our Cooks</a></li>
                        <li style={styles.listStyle}><a style={styles.linkStyle} href="">See Our Features</a></li>
                    </ul>
                </div>
            </div>
            <div style={styles.rightSection}>
                <ul>
                    <h4>Learn more</h4>
                    <li style={styles.listStyle}><a style={styles.linkStyle} href="">Our Cooks</a></li>
                    <li style={styles.listStyle}><a style={styles.linkStyle} href="">See Our Features</a></li>
                    <li style={styles.listStyle}><a style={styles.linkStyle} href="">FAQ</a></li>
                    <li style={styles.listStyle}><a style={styles.linkStyle} href="">Our Cooks</a></li>
                    <li style={styles.listStyle}><a style={styles.linkStyle} href="">See Our Features</a></li>
                    <li style={styles.listStyle}><a style={styles.linkStyle} href="">FAQ</a></li>
                    <li style={styles.listStyle}><a style={styles.linkStyle} href="">Our Cooks</a></li>
                </ul>
            </div>
        </div>
    );
}
