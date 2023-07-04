import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start  my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/mohammed-anwar-kashlan-783137281/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon style={{ fontSize: "37px" }} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Anwar-kashlan"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon style={{ fontSize: "37px" }} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/anoar.kashlan/"
        target="_blank"
        rel="noreferrer"
      >
        <FacebookIcon style={{ fontSize: "37px" }} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
