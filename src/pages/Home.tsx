import CandidatesTable from "../componets/CandidatesTable";
import Header from "../componets/Header";
import NoticeBanner from "../componets/NoticeBanner";

const Home: React.FC = () => {
  return <div className="container">
    <Header />
    <NoticeBanner />
    {/* <ShareButton /> */}
    <br />
    <br />
    <CandidatesTable />
  </div>;
};

export default Home;