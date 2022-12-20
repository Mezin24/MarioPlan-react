import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className='container project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aspernatur, libero?
          </p>
        </div>
        <div className='card-action grey lighten-5 grey-text'>
          <div>Posted by The Net Ninja</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
