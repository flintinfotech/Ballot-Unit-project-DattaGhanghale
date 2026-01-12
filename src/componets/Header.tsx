const Header: React.FC = () => {
  return (
    <>
      {/* Main heading */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "clamp(20px, 4vw, 32px)",
          margin: "20px 10px",
        }}
      >
        बृहन्मुंबई महानगरपालिका सार्वत्रिक निवडणूक २०२६
      </h1>

      {/* Sub banner */}
      <div
        style={{
          backgroundColor: "#3f3c8d",
          color: "#fff",
          padding: "12px 16px",
          borderRadius: "25px",
          textAlign: "center",
          margin: "0 auto 20px",
          maxWidth: "900px",      // ✅ Desktop max
          width: "90%",           // ✅ Mobile fit
          fontSize: "clamp(14px, 3vw, 18px)",
        }}
      >
        बृहन्मुंबई महानगरपालिका सार्वत्रिक निवडणूक प्रभाग-८९
      </div>
    </>
  );
};

export default Header;
