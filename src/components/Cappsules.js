import Cappsule from "./Cappsule";

const Cappsules = ({cappsules, onDelete, onOpen}) => {

  return (
      <>
          <h2>Double click to open message</h2>
          {
              cappsules.map((cappsule) => (
                  <Cappsule key={cappsule.id}
                            cappsule={cappsule}
                            onDelete={onDelete}
                            onOpen={onOpen}
                  />
              ))
          }
      </>
  )
}

export default Cappsules