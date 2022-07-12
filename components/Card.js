export default function Card(props) {
    return <>
        <div className="bg-white rounded px-6 py-2 mb-6">
            {props.children}
        </div>
    </>
  }