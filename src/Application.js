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
          <NavigationLink to="/notes/Securing_OpenSSH">Securing OpenSSH Server</NavigationLink>
          <NavigationLink to="/notes/Securing_GRUB">Securing the GRUB Boot Loader</NavigationLink>
          <NavigationLink to="/notes/Password_Policy">Enforcing Password Policy in Linux</NavigationLink>
          <NavigationLink to="/notes/User_Accounts">Securing and Managing User Accounts</NavigationLink>
          <NavigationLink to="/notes/Sudo_Management">Managing Administrative Access with sudo</NavigationLink>
          <NavigationLink to="/notes/Fork_Bomb">Fork Bomb Attack and Mitigation</NavigationLink>
          <NavigationLink to="/notes/Password_Cracking">Password Security Audits & Cracking Techniques</NavigationLink>
          <NavigationLink to="/notes/John_the_Ripper">Cracking Passwords with John the Ripper</NavigationLink>
          <NavigationLink to="/notes/File_Integrity">File Integrity Monitoring with AIDE</NavigationLink>
          <NavigationLink to="/notes/Rootkits">Understanding Rootkits and Scanning for Them</NavigationLink>
          <NavigationLink to="/notes/ClamAV">Using ClamAV for Antivirus on Linux</NavigationLink>
          <NavigationLink to="/notes/Disk_Encryption">Encrypting Disks Using dm-crypt and LUKS</NavigationLink>
          <NavigationLink to="/notes/LUKS_Key_File">Unlocking LUKS Encrypted Drives with a Key File</NavigationLink>
          <NavigationLink to="/notes/GPG_Encryption">Encrypting Files with GPG</NavigationLink>
          <NavigationLink to="/notes/EncryptPad">Encrypting Text Files with EncryptPad</NavigationLink>
          <NavigationLink to="/notes/Steganography">Steganography Basics</NavigationLink>
          <NavigationLink to="/notes/Steghide">Steghide and Advanced Steganography</NavigationLink>
          <NavigationLink to="/notes/Nmap">Nmap (Network Mapper) Detailed Notes</NavigationLink>
          <NavigationLink to="/notes/Advanced_Nmap">Advanced Nmap Features</NavigationLink>
          <NavigationLink to="/notes/Iptables">Understanding iptables and Netfilter</NavigationLink>
          <NavigationLink to="/notes/Iptables_Usage">Iptables Command and Usage</NavigationLink>
          <NavigationLink to="/notes/Iptables_Rules">Writing iptables Rules & Creating Scripts</NavigationLink>
          <NavigationLink to="/notes/IP_Tables_Policy">IP Tables Policy & Firewall State</NavigationLink>
          <NavigationLink to="/notes/IP_Matches">Matching IPs with iptables</NavigationLink>
          <NavigationLink to="/notes/Port_Filtering">Filtering Traffic by TCP/UDP Ports</NavigationLink>
          <NavigationLink to="/notes/Stateful_Firewalls">Stateful Firewalls Overview</NavigationLink>
          <NavigationLink to="/notes/MAC_Address_Filtering">MAC Address Filtering with iptables</NavigationLink>
          <NavigationLink to="/notes/Service_Access_Time">Controlling Service Access by Date/Time</NavigationLink>
          <NavigationLink to="/notes/Iptables_Accept_Drop">Understanding Accept/Drop in iptables</NavigationLink>
          <NavigationLink to="/notes/Iptables_Logging">Logging with iptables</NavigationLink>
        </Navigation>

        <section className="col-span-9 p-4">
          <Routes>
            {/* Dynamic Page Loading */}
            <Route path="/notes/:id" element={<Page />} />
            <Route path="/" element={<p>Select a Linux lesson to start your journey.</p>} />
          </Routes>
        </section>
      </div>
    </main>
  );
}

export default Application;
