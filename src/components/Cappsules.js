import Cappsule from "./Cappsule";

const Cappsules = ({cappsules, onDelete, onOpen}) => {

  return (
      <>
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