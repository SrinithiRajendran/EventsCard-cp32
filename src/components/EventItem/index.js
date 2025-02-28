// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEvent, isActive} = props
  const {id, imageUrl, name, location} = eventDetails

  const isActiveOrNot = isActive ? 'active-event-item' : 'event-item'

  const onClickEvent = () => {
    setActiveEvent(id)
  }

  return (
    <li className="list-container">
      <div className="e-container">
        <button type="button" onClick={onClickEvent} className="image-btn">
          <img src={imageUrl} alt="event" className={isActiveOrNot} />
        </button>
        <div className="p-container">
          <p className="list-name">{name}</p>
          <p className="list-location">{location}</p>
        </div>
      </div>
    </li>
  )
}
export default EventItem
