import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

export const Footer = () => {

  return (
    <div className="footer-container">
        <a href="https://www.linkedin.com/in/hernan-santos-166161249/" 
            className="footer-icon" 
            target="_blank">
            <LinkedInIcon style={{fontSize: '2.5rem'}}/>
        </a>
        <a href="https://github.com/HernanSantos/Poke-App" 
            className="footer-icon" 
            target="_blank">
            <GitHubIcon style={{fontSize: '2.5rem'}}/>
        </a>
        <a href="" className="footer-icon" target="_blank"><WebIcon style={{fontSize: '2.5rem'}}/></a>

    </div>
  )
}
