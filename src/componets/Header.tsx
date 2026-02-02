const Header: React.FC = () => {
  return (
    <>
      {/* Main heading */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "clamp(10px, 4vw, 22px)",
          margin: "10px 5px",
        }}
      >
        येळगाव जिल्हापरिषद/पंचायत समिती
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
          fontSize: "clamp(13px, 3vw, 18px)",
        }}
      >
        येळगाव जिल्हा परिषद व पंचायत समिती निवडणूक २०२६
      </div>
    </>
  );
};

export default Header;
