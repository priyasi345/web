import { OuterLayout } from './styles/Layouts';
import './test.css';
import Question from './Components/Question';
import FAQSection from './Components/FAQSection';
import MessagingSection from './Components/MessagingSection';
import ChartSection from "./Components/ChartSection";
import CardSection from './Components/CardSection';
import styled from 'styled-components';
import Footer from './Components/Footer';
import PaymentSection from './Components/PaymentSection';
import Header from './Components/Header';
// // import HeaderContent from './Components/HeaderContent';
function App() {
  return (
    <div className="App">
       <Header/>
     <OuterLayout>
      <MainStyled>
        <CardSection/>
        <MessagingSection/>
        <PaymentSection/>
      
        <Question/>
        <FAQSection/>
        <ChartSection/>
        <Footer/>
      </MainStyled>
     </OuterLayout>

    </div>
  );
}

const MainStyled = styled.main`


`;
export default App;
