import React from "react";

const NoticeBanner: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#ff6a33",
        color: "white",
        padding: "18px 16px",
        fontSize: "clamp(14px, 3vw, 20px)",
        borderRadius: "10px",
        textAlign: "center",
        flex: 1,
      }}
    >
      मतदानाच्या दिवशी सुद्धा "मशाल" चिन्हा समोरील निळे बटन दाबावे.
    </div>
  );
};

const ShareButton: React.FC = () => {
  const handleShare = (): void => {
    const message =
      "मी डेमो मतदान केले आहे! तुम्ही केले का?\n" +
      "👇 इथे क्लिक करा आणि लगेच डेमो मतदान करा\n" +
      "I have done the demo voting! Have you?\n" +
      "👇 Click here and do demo voting now\n" +
      "https://bmcubtprabhagno-89.flintinfotechlive.site";
    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encodedText}`, "_blank");
  };
  return (
    <button
      onClick={handleShare}
      style={{
        backgroundColor: "#25D366",
        color: "white",
        padding: "14px 22px",
        border: "none",
        fontSize: "clamp(14px, 2.5vw, 16px)",
        borderRadius: "8px",
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}
    >
      WhatsApp SHARE
    </button>
  );
};

const BannerWithButton: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      {/* Banner + Button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
          width: "90%",          // ✅ responsive width
          maxWidth: "1000px",    // ✅ desktop limit
          margin: "0 auto 16px",
          justifyContent: "center",
        }}
      >
        <NoticeBanner />
        <ShareButton />
      </div>

      {/* Additional Info Section */}
      <div
        className="notice-info"
        style={{
          width: "90%",
          maxWidth: "1000px",
          margin: "0 auto 5px",
          marginBottom: "0",
          // padding: "12px 16px",
          // backgroundColor: "#f9f9f9",
          // borderRadius: "10px",
          // color: "#333",
          fontSize: "clamp(14px, 1.8vw, 16px)",
          lineHeight: "1.6",
          textAlign: "center", // center aligned
        }}
      >
        <p>
          <strong>सूचना:</strong> पॅनल मधील उमेदवाराला मतदान करावे, अन्यथा आपले मत अवैध ठरेल.
        </p>
        <hr />
        <p>
          <strong>मतदान:</strong> दिनांक १५ जानेवारी २०२६ रोजी, सकाळी. ७:३० ते सायंकाळी. ५:३० पर्यंत.
        </p>
      </div>
    </div>
  );
};

export default BannerWithButton;
