import { Routes, Route } from 'react-router-dom';
import { Navigation, NavigationLink } from './Navigation';
import { Page } from './Page';

function Application() {
  return (
    <main className="h-screen">
      <h1 className="text-3xl font-bold bg-blue-300 p-4 border-b-2 border-blue-400">
        The Linux Chronicles: A DevOps Journey
      </h1>
      <div className="grid grid-cols-12 grid-rows-1 gap-4 h-full">
        <Navigation>
          <NavigationLink to="/">Home</NavigationLink>
          {/* Updated Links for Each Linux Lesson */}
          <NavigationLink to="/notes/The_Call_to_Security: Fortifying OpenSSH Against Intruders">
            The Call to Security: Fortifying OpenSSH Against Intruders
          </NavigationLink>
          <NavigationLink to="/notes/Guarding_the_Gates: Securing the GRUB Bootloader">
            Guarding the Gates: Securing the GRUB Bootloader
          </NavigationLink>
          <NavigationLink to="/notes/Dharma_of_Defense: Enforcing Strong Password Policies">
            Dharma of Defense: Enforcing Strong Password Policies
          </NavigationLink>
          <NavigationLink to="/notes/The_Account_of_Karma: Managing User Accounts Effectively">
            The Account of Karma: Managing User Accounts Effectively
          </NavigationLink>
          <NavigationLink to="/notes/Commanding_the_Power: Wisely Using Sudo Privileges">
            Commanding the Power: Wisely Using Sudo Privileges
          </NavigationLink>
          <NavigationLink to="/notes/The_Chaos_of_the_Fork: Mitigating Fork Bombs">
            The Chaos of the Fork: Mitigating Fork Bombs
          </NavigationLink>
          <NavigationLink to="/notes/The_Test_of_Strength: Auditing Password Resilience">
            The Test of Strength: Auditing Password Resilience
          </NavigationLink>
          <NavigationLink to="/notes/The_Siege_of_the_Fortress: Strengthening Password Security">
            The Siege of the Fortress: Strengthening Password Security
          </NavigationLink>
          <NavigationLink to="/notes/The_Vigil_of_Integrity: Setting Up AIDE for Monitoring">
            The Vigil of Integrity: Setting Up AIDE for Monitoring
          </NavigationLink>
          <NavigationLink to="/notes/The_Hidden_Enemy: Detecting Rootkits">
            The Hidden Enemy: Detecting Rootkits
          </NavigationLink>
          <NavigationLink to="/notes/The_Sword_of_Purity: Utilizing ClamAV for Malware Protection">
            The Sword of Purity: Utilizing ClamAV for Malware Protection
          </NavigationLink>
          <NavigationLink to="/notes/The_Shield_of_Encryption: Implementing Disk Encryption">
            The Shield of Encryption: Implementing Disk Encryption
          </NavigationLink>
          <NavigationLink to="/notes/The_Key_to_the_Hidden_Realm: Managing Encryption Keys">
            The Key to the Hidden Realm: Managing Encryption Keys
          </NavigationLink>
          <NavigationLink to="/notes/The_Scroll_of_Secrets: Using GPG for File Encryption">
            The Scroll of Secrets: Using GPG for File Encryption
          </NavigationLink>
          <NavigationLink to="/notes/The_Guarded_Word: Securing Text with EncryptPad">
            The Guarded Word: Securing Text with EncryptPad
          </NavigationLink>
          <NavigationLink to="/notes/The_Art_of_Concealment: Mastering Steganography Techniques">
            The Art of Concealment: Mastering Steganography Techniques
          </NavigationLink>
          <NavigationLink to="/notes/The_Veil_of_Secrecy: Exploring Steghide for Hidden Data">
            The Veil of Secrecy: Exploring Steghide for Hidden Data
          </NavigationLink>
          <NavigationLink to="/notes/The_All_Seeing_Eye: Scanning Networks with Nmap">
            The All Seeing Eye: Scanning Networks with Nmap
          </NavigationLink>
          <NavigationLink to="/notes/Beyond_the_Horizon: Advanced Features of Nmap">
            Beyond the Horizon: Advanced Features of Nmap
          </NavigationLink>
          <NavigationLink to="/notes/The_Barrier_of_Defense: Understanding iptables and Netfilter">
            The Barrier of Defense: Understanding iptables and Netfilter
          </NavigationLink>
          <NavigationLink to="/notes/The_Command_of_Protection: Wielding iptables Commands">
            The Command of Protection: Wielding iptables Commands
          </NavigationLink>
          <NavigationLink to="/notes/The_Craft_of_the_Warrior: Writing Effective iptables Rules">
            The Craft of the Warrior: Writing Effective iptables Rules
          </NavigationLink>
          <NavigationLink to="/notes/The_Path_of_Control: Defining iptables Policies">
            The Path of Control: Defining iptables Policies
          </NavigationLink>
          <NavigationLink to="/notes/The_Cleansing_Fire: Flushing iptables for Fresh Configurations">
            The Cleansing Fire: Flushing iptables for Fresh Configurations
          </NavigationLink>
          <NavigationLink to="/notes/The_Art_of_Precision: Filtering Traffic by IP Addresses">
            The Art of Precision: Filtering Traffic by IP Addresses
          </NavigationLink>
          <NavigationLink to="/notes/The_Ports_of_Battle: Securing Digital Entry Points">
            The Ports of Battle: Securing Digital Entry Points
          </NavigationLink>
          <NavigationLink to="/notes/The_Heart_of_the_Shield: The Importance of Stateful Firewalls">
            The Heart of the Shield: The Importance of Stateful Firewalls
          </NavigationLink>
          <NavigationLink to="/notes/The_Defensive_Wall: Setting Up Stateful Firewall Rules">
            The Defensive Wall: Setting Up Stateful Firewall Rules
          </NavigationLink>
          <NavigationLink to="/notes/The_Mark_of_Identity: Matching Packets by MAC Address">
            The Mark of Identity: Matching Packets by MAC Address
          </NavigationLink>
          <NavigationLink to="/notes/The_Keeper_of_Time: Controlling Access by Date and Time">
            The Keeper of Time: Controlling Access by Date and Time
          </NavigationLink>
          <NavigationLink to="/notes/The_Path_of_Action: Understanding ACCEPT and DROP Targets in iptables">
            The Path of Action: Understanding ACCEPT and DROP Targets in iptables
          </NavigationLink>
        </Navigation>

        <section className="col-span-9 p-4">
          <Routes>
            {/* Dynamic Page Loading */}
            <Route path="/notes/:id" element={<Page />} />
            <Route path="/" element={<p>Kickstart your journey with me, Adarsh Pandey, a Cloud Engineer Trainee with a strong foundation in cloud computing and DevOps. I hold a Master's degree in Mathematics and Computing from IIT Dhanbad and an advanced certification in Cloud Computing from IIT Roorkee. I specialize in building scalable cloud solutions using AWS services like EC2, S3, Lambda, and RDS. My experience includes container orchestration with Docker and Kubernetes, automation with Terraform and Ansible, and implementing CI/CD pipelines using Jenkins, ArgoCD, and GitHub Actions. I've also deployed microservices and managed end-to-end DevOps pipelines, ensuring high availability and performance for web applications.</p>} />
          </Routes>
        </section>
      </div>
    </main>
  );
}

export default Application;
