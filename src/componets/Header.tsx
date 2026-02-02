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
        लातूर जिल्हापरिषदेच्या/रेणापूर पंचायत समितीच्या
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
        २८- खरोळा निवडणूक विभागातील सार्वत्रिक निवडणूक, २०२६
      </div>
    </>
  );
};

export default Header;
