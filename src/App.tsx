import './App.css'
import { PDFViewer, StyleSheet} from '@react-pdf/renderer';
import InvoiceDocument from './components/Documents/InvoiceDocument';

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    border: 0
  },
});

const App = () => {
  return (
    <>
      <PDFViewer style={styles.body}>
        <InvoiceDocument />
      </PDFViewer>
    </>
  );
}

export default App