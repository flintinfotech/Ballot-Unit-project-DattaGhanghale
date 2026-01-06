const Footer: React.FC = () => {
  return (
    <footer
      style={{
        marginTop: "20px",
        padding: "12px 16px",
        borderTop: "1px solid #ccc",
        fontSize: "14px",
        background: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT : Disclaimer */}
        <div style={{ flex: 1, minWidth: "250px" }}>
          <b>अस्वीकरण:</b> ही एक शैक्षणिक व प्रमोशनल वेबसाइट आहे, आणि याचा
          वास्तविक मतदानाशी काहीही संबंध नाही. माहितीपूर्ण उद्देशासाठी कृपया
          याचा वापर करा.
        </div>

        {/* RIGHT : Powered By */}
        <div
          style={{
            whiteSpace: "nowrap",
            textAlign: "right",
          }}
        >
          Powered by{" "}
          <a
            href="https://flintinfotech.com/#about"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#0b63ce",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Flint Infotech LLP
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
