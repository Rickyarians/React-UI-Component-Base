
export const maskAccountNumber = (num: any) => {
    if (!num) return ''
    
    const digits = num.replace(/\D/g, '');
  
    const first2 = digits.slice(0, 2);
    const last2 = digits.slice(-2);
  

    const middle = digits.slice(2, -2).replace(/\d/g, 'X');
  

    const masked = (first2 + middle + last2).match(/.{1,4}/g).join('-');
  
    return masked;
};

// 
//

// 