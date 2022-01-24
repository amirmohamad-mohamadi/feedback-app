import { Link } from "react-router-dom";

import Card from "../components/shared/Card";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>درباره این پروژه</h1>
        <p> این یک برنامه ریئکت برای بازخورد محصول است</p>
        <p>version: 1.0.0</p>
        <Link to="/">بازگشت به صفحه اصلی</Link>
      </div>
    </Card>
  );
};

export default AboutPage;
