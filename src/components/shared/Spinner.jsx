import spinnerurl from "./assets/spinner.gif" ;

export default function Spinner() {
  return (
    <img width={180} src={spinnerurl} alt="Loading.."
     className="text-center mx-auto"
    />
  )
}
