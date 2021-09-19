function canPrint(device) {
    device.print = () => {
      console.log(`${device.name} is printing a page`);
    };
  }

  const printer = { name: 'ACME Printer' };
  const copier = {name: 'Desis Copier'};

  canPrint(copier);
  canPrint(printer);
  
  copier.print();
  printer.print();
  