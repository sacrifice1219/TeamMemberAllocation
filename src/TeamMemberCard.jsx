import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const TeamMemberCard = ({ employee, handleEmployeeCardClick, selectedTeam }) => {
    return ( 
                   <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>
        
            { // eslint-disable-next-line
                (employee.gender === 'male') ? <img src={maleProfile} style={{ width: '100%', objectFit: "cover", }} className="card-img-top" /> : <img src={femaleProfile} style={{ width: '100%', objectFit: "cover", }} className="card-img-top" /> 
}                        
                        <div className="card-body">
                            <h5 className="card-title">Full Name: {employee.fullName}</h5>
                            <p className="card-text"><b>Designation: </b> {employee.designation}</p>
                            </div>
                    </div>
     );
}
 
export default TeamMemberCard;