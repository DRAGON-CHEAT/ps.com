const payload_map = [
  {
    displayTitle: 'etaHEN V4',
    description: '', // Dejar "description" vacío
    info: 'Descripción de etaHEN ', // Mantener "info"
    fileName: 'etaHEN-1.8B.bin',
    author: 'by dragon',
    version: 'v4'
  },
  {
    displayTitle: 'etaHEN V2',
    description: '', // Dejar "description" vacío
    info: 'Descripción de EtaHEN', // Mantener "info"
    fileName: 'etaHEN-1.4B.bin',
    author: 'by Dragon',
    version: 'v2'
  },
  {
    displayTitle: 'libhijacker game-patch',
    description: '', // Dejar "description" vacío
    info: 'Descripción de libhijacker game-patch', // Mantener "info"
    fileName: 'spawner.elf',
    author: 'illusion0001, astrelsky',
    source: 'https://github.com/illusion0001/libhijacker/releases/tag/1.138',
    loader: 'libhijacker',
    version: '1.138'
  },
  {
    displayTitle: 'Remove Cache',
    description: '', // Dejar "description" vacío
    info: 'Descripción de Remove Cache', // Mantener "info"
    fileName: 'Browser_appCache_remove.elf',
    author: 'Storm21CH',
    version: '1.0fix'
  },
  {
    displayTitle: 'Kstuff',
    description: '', // Dejar "description" vacío
    fileName: 'ps5-kstuff-v1.2.bin',
    info: 'Descripción de Kstuff', // Mantener "info"
    author: 'sleirsgoevy',
    source: 'https://github.com/sleirsgoevy/ps4jb2/blob/ps5-403/ps5-kstuff.bin',
    version: '1.2'
  },
  {
    displayTitle: 'Version',
    description: '', // Dejar "description" vacío
    info: 'Descripción de Versions', // Mantener "info"
    fileName: 'versions.elf',
    author: '?',
    version: '1.0'
  },
  {
    displayTitle: 'Fan control',
    description: '', // Dejar "description" vacío
    info: 'Descripción de Fan control', // Mantener "info"
    fileName: 'fan_threshold.elf',
    author: '?',
    source: '?',
    version: '1.0'
  },
  {
            displayTitle: 'Backup DB',
            description: '', // Dejar "description" vacío
            fileName: 'Backup-db-PS5.bin',
            info: 'Descripción de Backup DB', // Mantener "info"
            author: '?',
            source:'?',
            version: '0.5'
        },
    {
            displayTitle: 'FTPS5 (Non-Persistent)',
            description: '', // Dejar "description" vacío
            fileName: 'ftps5-np.elf',
            info: 'SiSTR0, Dragon, Echo', // Mantener "info"
            author: 'sleirsgoevy',
            source: 'https://github.com/EchoStretch/FTPS5/releases',
            version: '1.4'
        },
    { 
            displayTitle: 'FTPS5 (Persistent)',
            description: '', // Dejar "description" vacío
            fileName: 'ftps5-p.elf',
            info: 'SiSTR0, Dragon, Echo', // Mantener "info"
            author: 'sleirsgoevy',
            source: 'https://github.com/EchoStretch/FTPS5/releases',
            version: '1.4'
        },
    {
            displayTitle: 'PS5 Payload ELF Loader',
            description: '', // Dejar "description" vacío
            fileName: 'elfldr.elf',
            info: 'SiSTR0, Dragon, Echo', // Mantener "info"
            author: 'sleirsgoevy',
            source: 'https://github.com/john-tornblom/ps5-payload-elfldr/releases',
            version: '0.5'
        },
     {
            displayTitle: 'GetOSVersion',
            description: '', // Dejar "description" vacío
            fileName: 'getOsVersion.elf',
            info: 'SiSTR0, Dragon, Echo', // Mantener "info"
            author: 'sleirsgoevy',
            source: 'https://github.com/logic-68/getOsVersion/releases',
            version: '1.0.2'
        },
     {
            displayTitle: 'HW Info',
            description: '', // Dejar "description" vacío  
            info: 'Descripción de HW Info', // Mantener "info"
            fileName: 'hwinfo-tornblom.elf',
            author: '?',
            source: '?',
            version: '?'
        },
     {
            displayTitle: 'ps5debug',
            description: '', // Dejar "description" vacío  
            info: 'Descripción de HW Info', // Mantener "info"
            fileName: 'ps5debug.elf',
            author: 'SiSTR0, ctn123',
            source: 'https://github.com/GoldHEN/ps5debug',
            version: '1.0b1'
        },
  

];

// JavaScript para mostrar info en lugar de description
const btns = document.querySelectorAll('.btn');
const infoElement = document.getElementById('info'); // Obtén el elemento de info por su ID

btns.forEach(btn => {
  btn.addEventListener('mouseover', () => {
    const info = btn.getAttribute('data-info');
    infoElement.textContent = info; // Actualiza el contenido del elemento de info
  });

  btn.addEventListener('mouseout', () => {
    infoElement.textContent = ''; // Limpia el contenido cuando el ratón sale del elemento
  });
});
