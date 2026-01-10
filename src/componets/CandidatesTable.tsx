import { useState } from "react";
import { candidates as initialCandidates } from "../data/candidates";
import type { Candidate } from "../types/candidate";
import Footer from "./Footer";

const CandidatesTable: React.FC = () => {
  const [data, setData] = useState<Candidate[]>(initialCandidates);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  // ✅ Image validation helper
  const isValidImage = (src?: string) => {
    return !!src && (src.startsWith("/") || src.startsWith("http"));
  };

  // Convert number to Marathi digits
  const toMarathiNumber = (num: number) => {
    const marathiDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    return num
      .toString()
      .split("")
      .map((d) => marathiDigits[parseInt(d)])
      .join("");
  };

  // ✅ Vote handler (SECTION-SAFE)
  const handleVote = (candidate: Candidate, uniqueKey: string) => {
    if (!isValidImage(candidate.photo1) || !isValidImage(candidate.symbol)) {
      new Audio("/sounds/Error.mp3").play().catch(() => { });
      return;
    }

    setData((prev) =>
      prev.map((c) =>
        c === candidate ? { ...c, votes: c.votes + 1 } : c
      )
    );

    setActiveKey(uniqueKey);

    const sound = new Audio("/sounds/Beep.mp3");
    sound.onended = () => setActiveKey(null);
    sound.play().catch(() => { });
  };

  // ✅ Render image safely
  const renderImage = (src?: string, className?: string) => {
    if (!isValidImage(src)) return null;
    return <img src={src} className={className} alt="" />;
  };

  return (
    <>
      <div className="table-wrapper">
        <table className="table responsive-table">
          <thead style={{ backgroundColor: "#e0e0e0" }}>
            <tr>
              <th>अ.क्र.</th>
              <th>उमेदवाराचे नाव</th>
              <th>फोटो</th>
              <th>चिन्ह</th>
              <th>स्थिती</th>
              <th>बटन</th>
            </tr>
          </thead>

          <tbody>
            {/* ================= SECTION 1 ================= */}
            <tr className="group-row">
              <td colSpan={6}>
                <div style={{ justifyContent: "center" }}>
                  <span>अ-अनुसूचित जमाती प्रवर्ग</span>
                </div>
              </td>
            </tr>

            {data.slice(0, 4).map((c, i) => {
              const key = `sec1-${c.id}`;
              return (
                <tr key={key}>
                  <td>{toMarathiNumber(i + 1)}</td>
                  <td><b>{c.name}</b></td>
                  <td>{renderImage(c.photo1, "candidate-photo")}</td>
                  <td>{renderImage(c.symbol, "candidate-symbol")}</td>
                  <td>
                    {/* <span
                      className="status-dot"
                      style={{ background: activeKey === key ? "red" : "black" }}
                    /> */}
                    {/* This below span is is for the Arrow Left Side instead black dot. */}
                    <span
                      className={`evm-arrow-left ${activeKey === key ? "active" : ""}`}
                    >
                      <span className="arrow-head"></span>
                      <span className="arrow-line"></span>
                    </span>
                  </td>
                  <td style={{ backgroundColor: "#e0e0e0" }}>
                    <button className="vote-btn" onClick={() => handleVote(c, key)}>
                      <b>बटन दाबा 👆🏼</b>
                    </button>
                  </td>
                </tr>
              );
            })}

            {/* ================= SECTION 2 ================= */}
            <tr className="group-row">
              <td colSpan={6} style={{ background: "pink" }}>
                <div style={{ justifyContent: "center" }}>
                  <span>ब-नागरिकांचा मागास प्रवर्ग महिला</span>
                </div>
              </td>
            </tr>

            {data.slice(4, 9).map((c, i) => {
              const key = `sec2-${c.id}`;
              return (
                <tr key={key} style={{ background: "lightpink" }}>
                  <td>{toMarathiNumber(i + 1)}</td>
                  <td><b>{c.name}</b></td>
                  <td>{renderImage(c.photo1, "candidate-photo")}</td>
                  <td>{renderImage(c.symbol, "candidate-symbol")}</td>
                  <td>
                    <span
                      className={`evm-arrow-left ${activeKey === key ? "active" : ""}`}
                    >
                      <span className="arrow-head"></span>
                      <span className="arrow-line"></span>
                    </span>
                    {/* <span
                      className="status-dot"
                      style={{ background: activeKey === key ? "red" : "black" }}
                    /> */}
                  </td>
                  <td style={{ backgroundColor: "#e0e0e0" }}>
                    <button className="vote-btn" onClick={() => handleVote(c, key)}>
                      <b>बटन दाबा 👆🏼</b>
                    </button>
                  </td>
                </tr>
              );
            })}

            {/* ================= SECTION 3 ================= */}
            <tr className="group-row">
              <td colSpan={6} style={{ background: "lightyellow" }}>
                <div style={{ justifyContent: "center" }}>
                  <span>क-सर्वसाधारण प्रवर्ग</span>
                </div>
              </td>
            </tr>

            {data.slice(9, 27).map((c, i) => {
              const key = `sec3-${c.id}`;
              return (
                <tr key={key} style={{ background: "lightyellow" }}>
                  <td>{toMarathiNumber(i + 1)}</td>
                  <td><b>{c.name}</b></td>
                  <td>{renderImage(c.photo1, "candidate-photo")}</td>
                  <td>{renderImage(c.symbol, "candidate-symbol")}</td>
                  <td>
                    <span
                      className={`evm-arrow-left ${activeKey === key ? "active" : ""}`}
                    >
                      <span className="arrow-head"></span>
                      <span className="arrow-line"></span>
                    </span>
                    {/* <span
                      className="status-dot"
                      style={{ background: activeKey === key ? "red" : "black" }}
                    /> */}
                  </td>
                  <td style={{ backgroundColor: "#e0e0e0" }}>
                    <button className="vote-btn" onClick={() => handleVote(c, key)}>
                      <b>बटन दाबा 👆🏼</b>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
};

export default CandidatesTable;
