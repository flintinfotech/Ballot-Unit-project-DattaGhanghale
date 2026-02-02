import { useState } from "react";
import { candidates as initialCandidates } from "../data/candidates";
import type { Candidate } from "../types/candidate";
import Footer from "./Footer";

const CandidatesTable: React.FC = () => {
  const [data, setData] = useState<Candidate[]>(initialCandidates);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const isValidImage = (src?: string) =>
    !!src && (src.startsWith("/") || src.startsWith("http"));

  const toMarathiNumber = (num: number) => {
    const marathiDigits = ["०", "१", "२", "३"];
    return num
      .toString()
      .split("")
      .map((d) => marathiDigits[parseInt(d)])
      .join("");
  };

  const handleVote = (candidate: Candidate, uniqueKey: string, playSound: boolean) => {
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

    if (playSound) {
      const sound = new Audio("/sounds/Beep.mp3");
      sound.onended = () => setActiveKey(null);
      sound.play().catch(() => { });
    } else {
      setTimeout(() => setActiveKey(null), 300);
    }
  };

  const renderImage = (src?: string, className?: string) =>
    isValidImage(src) ? <img src={src} className={className} alt="" /> : null;

  return (
    <>
      <div className="table-wrapper" style={{ marginBottom: "2px" }}>
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
            {/* ===== SECTION 1 ===== */}
            <tr className="group-row">
              <td colSpan={6}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <span>६५ येळगाव जिल्हा परिषद गटाचे भाजपा पुरस्कृत उमेदवार</span>
                </div>
              </td>
            </tr>

            {data.slice(0, 3).map((c, i) => {
              const key = `sec1-${i}`;
              return (
                <tr key={key}>
                  <td>{toMarathiNumber(i + 1)}</td>
                  <td><b>{c.name}</b></td>
                  <td>{renderImage(c.photo1, "candidate-photo")}</td>
                  <td>{renderImage(c.symbol, "candidate-symbol")}</td>
                  <td>
                    <span className={`evm-arrow-left ${activeKey === key ? "active" : ""}`}>
                      <span className="arrow-head"></span>
                      <span className="arrow-line"></span>
                    </span>
                  </td>
                  <td style={{ backgroundColor: "#e0e0e0" }}>
                    <button className="vote-btn" onClick={() => handleVote(c, key, false)}>
                      <b>बटन दाबा 👆🏼</b>
                    </button>
                  </td>
                </tr>
              );
            })}

            {/* ===== SECTION 2 ===== */}
            <tr className="group-row">
              <td colSpan={6} style={{ background: "pink" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <span>१३० येळगाव पंचायत समिती गणाच्या अधिकृत उमेदवार</span>
                </div>
              </td>
            </tr>

            {data.slice(3, 6).map((c, i) => {
              const key = `sec2-${i}`;
              return (
                <tr key={key} style={{ background: "lightpink" }}>
                  <td>{toMarathiNumber(i + 1)}</td>
                  <td><b>{c.name}</b></td>
                  <td>{renderImage(c.photo1, "candidate-photo")}</td>
                  <td>{renderImage(c.symbol, "candidate-symbol")}</td>
                  <td>
                    <span className={`evm-arrow-left ${activeKey === key ? "active" : ""}`}>
                      <span className="arrow-head"></span>
                      <span className="arrow-line"></span>
                    </span>
                  </td>
                  <td style={{ backgroundColor: "#e0e0e0" }}>
                    <button className="vote-btn" onClick={() => handleVote(c, key, true)}>
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
