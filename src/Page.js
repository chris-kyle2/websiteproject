import { useParams } from 'react-router-dom';

const content = {
  "The_Call_to_Security: Fortifying OpenSSH Against Intruders": 
    "As Krishna instructs Arjuna on the need for action, so too must we secure the gateway to our digital kingdom, fortifying OpenSSH against the forces of intrusion. Essential steps include disabling root login, using key-based authentication, and configuring fail2ban to mitigate brute-force attacks. Stay vigilant by keeping your SSH server updated and monitoring access logs.",

  "Guarding_the_Gates: Securing the GRUB Bootloader": 
    "Like the key to Dharma, GRUB guards the entry to your system. Learn the sacred methods of protection, ensuring no intruder bypasses this threshold. Implement a GRUB password and lock down access to critical boot entries to secure your system from physical access threats.",

  "Dharma_of_Defense: Enforcing Strong Password Policies": 
    "Just as Krishna speaks of the discipline of the warrior, so too must we enforce discipline in passwords. Strong policies are the sword and shield in our digital battlefield. Use 'pam_pwquality' to enforce complexity rules, set password expiration, and ensure users rotate their passwords regularly.",

  "The_Account_of_Karma: Managing User Accounts Effectively": 
    "Every user leaves their imprint, their karma, upon the system. Learn the art of managing these karmic traces, securing accounts from misuse and exploitation. Key steps include removing inactive accounts, setting strict permissions, and configuring the system to log all user activity for auditing purposes.",

  "Commanding_the_Power: Wisely Using Sudo Privileges": 
    "As Arjuna learns the power of his weapons, so too must we control the power of sudo. With great privilege comes the need for wisdom in its administration. Use the sudoers file to grant users specific administrative privileges, and configure 'sudo' to require strong passwords and log all commands executed.",

  "The_Chaos_of_the_Fork: Mitigating Fork Bombs": 
    "Beware the unruly chaos of the Fork Bomb, a creation of endless loops and destruction. Learn the strategies to mitigate and contain this digital havoc. Mitigating fork bombs involves setting user process limits using 'ulimit' and properly configuring resource management tools like 'cgroups'.",

  "The_Test_of_Strength: Auditing Password Resilience": 
    "As Arjuna must test his strength, so too must we test the resilience of our passwords. Learn the techniques to audit and crack them before the adversary does. Tools like 'John the Ripper' can simulate attacks to reveal weaknesses in password policies and user behavior.",

  "The_Siege_of_the_Fortress: Strengthening Password Security": 
    "John the Ripper, the warrior of brute force, lays siege to the walls of weak passwords. Master the techniques of this fearsome tool and harden your defenses. Understanding how to use it effectively is crucial in the fight against weak passwords.",

  "The_Vigil_of_Integrity: Setting Up AIDE for Monitoring": 
    "AIDE is your ever-vigilant sentinel, ensuring that no unauthorized change passes unnoticed. Learn to set up this protector of file integrity in your system's kingdom. Regular checks ensure any unauthorized modifications are flagged, protecting against rootkits or malware.",

  "The_Hidden_Enemy: Detecting Rootkits": 
    "As Krishna teaches Arjuna about hidden forces, rootkits hide deep within the system. Learn to detect and neutralize these invisible foes. Scanning for rootkits in Linux involves using tools like 'chkrootkit' and 'rkhunter' to detect hidden processes, files, and unusual system behavior.",

  "The_Sword_of_Purity: Utilizing ClamAV for Malware Protection": 
    "Just as Krishna offers guidance in the fight against evil, ClamAV is your weapon against malware and viruses. Cleanse your Linux system from the impurities of the digital world. Regular updates to virus definitions ensure ongoing protection.",

  "The_Shield_of_Encryption: Implementing Disk Encryption": 
    "Encrypting your disks is like shielding yourself in battle. Learn to use LUKS and 'dm-crypt' to fortify your data, making it invincible to prying eyes. Full disk encryption safeguards data at rest, even if physical access to the device is obtained.",

  "The_Key_to_the_Hidden_Realm: Managing Encryption Keys": 
    "A key file is like the sacred mantra that unlocks the door to your encrypted realms. Understand how to wield this key wisely to access your protected data. Unlocking LUKS encrypted drives with a key file provides a more secure and automated way to manage encryption keys.",

  "The_Scroll_of_Secrets: Using GPG for File Encryption": 
    "Just as knowledge is power, GPG allows you to protect the knowledge stored in your files. Learn the ancient art of file encryption and keep your secrets secure. GPG allows for both symmetric and asymmetric encryption methods, ensuring that sensitive data remains protected during storage and transit.",

  "The_Guarded_Word: Securing Text with EncryptPad": 
    "Just as a warrior guards his secrets, EncryptPad shields your words from interception. Learn to use this tool to secure sensitive information. It combines GPG-based encryption with a user-friendly interface, allowing users to secure their text-based data easily.",

  "The_Art_of_Concealment: Mastering Steganography Techniques": 
    "As Krishna reveals hidden truths to Arjuna, steganography reveals messages hidden in plain sight. Master the art of embedding secrets where none suspect. Understanding how to use and detect steganography techniques is essential for modern cybersecurity.",

  "The_Veil_of_Secrecy: Exploring Steghide for Hidden Data": 
    "Delve deeper into steganography with Steghide, and uncover how secrets are concealed in images and audio. Perfect your craft of covert communication. With its support for multiple file formats and robust encryption options, Steghide is a powerful tool for concealing information in plain sight.",

  "The_All_Seeing_Eye: Scanning Networks with Nmap": 
    "Just as Krishna is aware of all, Nmap gives you the vision to scan and understand every node in your network. Harness the power of Nmap to explore and secure your digital battlefield. It helps administrators map out network structures, identify open ports, and discover vulnerabilities within the network perimeter.",

  "Beyond_the_Horizon: Advanced Features of Nmap": 
    "Arjuna is given divine sight; so too does Nmap offer advanced features to see beyond the ordinary. Master these techniques and achieve unparalleled network visibility. Advanced Nmap features include detailed scanning options, such as service version detection, OS detection, and timing templates.",

  "The_Barrier_of_Defense: Understanding iptables and Netfilter": 
    "As Krishna teaches Arjuna about the nature of defenses, iptables and Netfilter act as barriers against threats. Learn the architecture of this firewall and guard your network. Understanding iptables and netfilter is key to managing traffic in and out of your Linux server.",

  "The_Command_of_Protection: Wielding iptables Commands": 
    "Just as Arjuna wields his bow with skill, learn to wield iptables commands with precision. Protect your system with these powerful tools. The iptables command and its options provide granular control over network traffic.",

  "The_Craft_of_the_Warrior: Writing Effective iptables Rules": 
    "As Arjuna learns the techniques of war, you too will learn to write iptables rules that defend against all threats. Build scripts that automate your security. Writing iptables rules involves creating custom chains and configuring policies to filter or block traffic based on specific criteria.",

  "The_Path_of_Control: Defining iptables Policies": 
    "Understanding policy is key to effective action. Learn how to define iptables policies that keep your system both protected and responsive. A default 'ACCEPT' policy allows all traffic unless explicitly blocked, whereas 'DROP' policies deny all traffic unless allowed.",

  "The_Cleansing_Fire: Flushing iptables for Fresh Configurations": 
    "Sometimes, the path to victory requires resetting the battlefield. Learn how to flush iptables and reset your firewall to its most open, but controlled, state. Flushing iptables clears all rules, returning it to a clean state for fresh configurations.",

  "The_Art_of_Precision: Filtering Traffic by IP Addresses": 
    "Just as Arjuna targets his enemies with precision, iptables allows you to filter traffic based on source and destination IPs. Master this art for detailed control. Iptables allows for packet matching based on source and destination IP addresses, enabling network administrators to control access based on the IP ranges permitted or denied.",

  "The_Ports_of_Battle: Securing Digital Entry Points": 
    "In every battle, there are entry points. Learn how to secure these digital ports using iptables to control traffic flow by TCP and UDP protocols. Filtering traffic based on TCP and UDP ports is crucial for limiting exposure to only necessary services.",

  "The_Heart_of_the_Shield: The Importance of Stateful Firewalls": 
    "Stateful firewalls are like shields that adapt to the battle. Learn the basics of how stateful firewalls offer advanced protection against incoming threats. Stateful firewalls keep track of the state of active connections and make decisions based on the state of the connection.",

  "The_Defensive_Wall: Setting Up Stateful Firewall Rules": 
    "Build a strong, adaptable defense. Learn to set up stateful firewall rules with iptables that intelligently manage traffic based on connection state. Scripting these rules allows for reusable and consistent firewall configurations.",

  "The_Mark_of_Identity: Matching Packets by MAC Address": 
    "Like recognizing allies in battle by their markings, iptables allows you to match packets based on MAC addresses. Use this technique to control access at the device level. Controlling access to services based on MAC addresses provides an additional layer of security.",

  "The_Keeper_of_Time: Controlling Access by Date and Time": 
    "Just as Krishna understands the cycles of time, so too can iptables be configured to control access based on time constraints. Use this to schedule services or block access. Controlling access to services based on date and time helps in limiting exposure during off-hours.",

  "The_Path_of_Action: Understanding ACCEPT and DROP Targets in iptables": 
    "In the battle between right and wrong action, iptables defines its rules with ACCEPT and DROP targets. Learn when to allow and when to deny, ensuring a balanced defense against all that seeks to breach your fortress."
};

export const Page = () => {
  const { id } = useParams();
  return <p>{content[id] || "Content not found."}</p>;
};
