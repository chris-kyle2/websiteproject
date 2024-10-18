import { useParams } from 'react-router-dom';

const content = {
  "Securing_OpenSSH": 
    "Securing an OpenSSH server is crucial to maintaining the integrity and security of your system. Some essential steps include disabling root login, using key-based authentication, and configuring fail2ban to mitigate brute-force attacks. Stay vigilant by keeping your SSH server updated and monitoring access logs.",
  "Securing_GRUB": 
    "Securing the GRUB bootloader ensures that unauthorized users can't modify boot settings or access single-user mode without proper credentials. Implementing a GRUB password and locking down access to critical boot entries is a fundamental step to secure your system from physical access threats.",
  "Password_Policy": 
    "Enforcing a strong password policy in Linux helps in minimizing the risks of password-related vulnerabilities. Use 'pam_pwquality' to enforce complexity rules, set password expiration, and ensure users rotate their passwords regularly.",
  "User_Accounts": 
    "Securing and managing user accounts in Linux is about controlling who has access to what. Key steps include removing inactive accounts, setting strict permissions, and configuring the system to log all user activity for auditing purposes.",
  "Sudo_Management": 
    "Managing administrative access with sudo is essential for privilege separation in Linux. Use the sudoers file to grant users specific administrative privileges, and configure 'sudo' to require strong passwords and log all commands executed.",
  "Fork_Bomb": 
    "A fork bomb is a denial-of-service attack that rapidly creates child processes to exhaust system resources. Mitigating fork bombs involves setting user process limits using 'ulimit' and properly configuring resource management tools like 'cgroups'.",
  "Password_Cracking": 
    "Password security audits are vital for identifying weak passwords. Tools like 'John the Ripper' can simulate attacks to reveal weaknesses in password policies and user behavior. Regularly auditing and enforcing strong passwords can prevent such exploits.",
  "John_the_Ripper": 
    "John the Ripper is a powerful password-cracking tool used to perform brute-force attacks on password hashes. It supports various hash formats, and with its vast wordlist and configuration options, it’s essential to learn how to defend against it.",
  "File_Integrity": 
    "File integrity monitoring with AIDE (Advanced Intrusion Detection Environment) helps track changes to critical system files. Regular checks ensure any unauthorized modifications are flagged, protecting against rootkits or malware.",
  "Rootkits": 
    "Rootkits are malicious programs designed to hide the presence of an attacker. Scanning for rootkits in Linux involves using tools like 'chkrootkit' and 'rkhunter' to detect hidden processes, files, and unusual system behavior.",
  "ClamAV": 
    "ClamAV is a versatile, open-source antivirus solution for Linux. It can scan for viruses, trojans, and other malware, making it a valuable tool for maintaining the integrity of your server. Regular updates to virus definitions ensure ongoing protection.",
  "Disk_Encryption": 
    "Encrypting disks and partitions using dm-crypt and LUKS (Linux Unified Key Setup) ensures that sensitive data is protected from unauthorized access. Full disk encryption safeguards data at rest, even if physical access to the device is obtained.",
  "LUKS_Key_File": 
    "Unlocking LUKS encrypted drives with a key file provides a more secure and automated way to manage encryption keys. Using key files instead of passphrases minimizes the risks of human error while providing strong encryption.",
  "GPG_Encryption": 
    "Encrypting files using GPG (GNU Privacy Guard) provides robust encryption for securing individual files. GPG allows for both symmetric and asymmetric encryption methods, ensuring that sensitive data remains protected during storage and transit.",
  "EncryptPad": 
    "EncryptPad is a simple tool for encrypting text files. It combines GPG-based encryption with a user-friendly interface, allowing users to secure their text-based data easily without the complexities of manual encryption commands.",
  "Steganography": 
    "Steganography hides data within other files, such as images, making it an ideal method for covertly transmitting sensitive information. Understanding how to use and detect steganography techniques is essential for modern cybersecurity.",
  "Steghide": 
    "Steghide is a tool used for steganography, allowing users to embed data into image and audio files. With its support for multiple file formats and robust encryption options, Steghide is a powerful tool for concealing information in plain sight.",
  "Nmap": 
    "Nmap (Network Mapper) is a versatile tool used for network discovery and security auditing. It helps administrators map out network structures, identify open ports, and discover vulnerabilities within the network perimeter.",
  "Advanced_Nmap": 
    "Advanced Nmap features include detailed scanning options, such as service version detection, OS detection, and timing templates. These features allow administrators to perform more thorough and efficient network audits.",
  "Iptables": 
    "Understanding iptables and netfilter is key to managing traffic in and out of your Linux server. Iptables allows for packet filtering, NAT, and stateful packet inspection, making it an essential tool for network security.",
  "Iptables_Usage": 
    "The iptables command and its options provide granular control over network traffic. Learning its syntax and structure is crucial for configuring Linux firewalls effectively.",
  "Iptables_Rules": 
    "Writing iptables rules involves creating custom chains and configuring policies to filter or block traffic based on specific criteria. Scripting these rules allows for reusable and consistent firewall configurations.",
  "IP_Tables_Policy": 
    "Understanding default iptables policies and how to reset them is critical for managing firewall states. A default 'ACCEPT' policy, for example, allows all traffic unless explicitly blocked, whereas 'DROP' policies deny all traffic unless allowed.",
  "IP_Matches": 
    "Iptables allows for packet matching based on source and destination IP addresses, enabling network administrators to control access based on the IP ranges permitted or denied.",
  "Port_Filtering": 
    "Filtering traffic based on TCP and UDP ports is crucial for limiting exposure to only necessary services. Using iptables, administrators can allow or block access to specific services by configuring port-based rules.",
  "Stateful_Firewalls": 
    "Stateful firewalls keep track of the state of active connections and make decisions based on the state of the connection. Iptables can be configured for stateful inspection to handle network traffic more intelligently.",
  "MAC_Address_Filtering": 
    "Controlling access to services based on MAC addresses provides an additional layer of security. Iptables allows for MAC address-based filtering, ensuring that only authorized devices can connect to your network.",
  "Service_Access_Time": 
    "Controlling access to services based on date and time helps in limiting exposure during off-hours. Iptables can be configured to allow or block traffic only during specified time windows.",
  "Iptables_Accept_Drop": 
    "The ACCEPT and DROP targets are fundamental in iptables. Understanding when to use each is key to creating effective firewall rules that either allow or deny traffic appropriately.",
  "Iptables_Logging": 
    "The LOG target in iptables allows administrators to monitor and analyze network traffic by writing specific packets to the system logs. This is essential for auditing and identifying potential security incidents.",
};

export const Page = () => {
  const { id } = useParams();
  return <p>{content[id] || "Content not found."}</p>;
};
