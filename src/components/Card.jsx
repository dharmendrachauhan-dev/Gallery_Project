
function Card(props) {
    console.log(props)
  return (
    <div>
      <a href={props.elem.url}>
            <div className="h-40 w-45 bg-white overflow-hidden rounded-2xl">
              <img
                className="object-cover h-full w-full "
                src={props.elem.download_url}
                alt=""
              />
            </div>
          </a>
          <h1 className="font-bold text-lg">{props.elem.author}</h1>
    </div>
  )
}

export default Card
