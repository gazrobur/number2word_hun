const ones: string[] = ['', 'egy', 'kettő', 'három', 'négy', 'öt', 'hat', 'hét', 'nyolc', 'kilenc'];
const tens: string[] = ['', '', 'húsz', 'harminc', 'negyven', 'ötven', 'hatvan', 'hetven', 'nyolcvan', 'kilencven'];
const teens: string[] = ['tíz', 'tizenegy', 'tizenkettő', 'tizenhárom', 'tizennégy', 'tizenöt', 'tizenhat', 'tizenhét', 'tizennyolc', 'tizenkilenc'];


function convertMillions(num: number): string {
    if (num >= 1000000) {
        return convertThousands(num % 1000000) === '' ? convertMillions(Math.floor(num / 1000000)) + 'millió' :
            convertMillions(Math.floor(num / 1000000)) + 'millió-' + convertThousands(num % 1000000);
    } else {
        return convertThousands(num);
    }
}

function convertThousands(num: number): string {
    if (num == 1000) return 'ezer';
    if (num > 1000) {
        if (num > 1000 && num <= 1999) {
            return 'ezer' + convertHundreds(num % 1000)
        }
        if (convertHundreds(num % 1000) === '') return convertHundreds(Math.floor(num / 1000)) + 'ezer';
        return convertHundreds(Math.floor(num / 1000)) + 'ezer-' + convertHundreds(num % 1000);
    }
    else {
        return convertHundreds(num);
    }
}

function convertHundreds(num: number): string {
    if (num > 199) {
        return ones[Math.floor(num / 100)] + 'száz' + convertTens(num % 100);
    } else if (num <= 199 && num > 99) {
        return 'száz' + convertTens(num % 100);
    }
    else {
        return convertTens(num);
    }
}

function convertTens(n: number): string {
    if (n < 10) {
        return ones[n];
    } else if (n >= 10 && n < 20) {
        return teens[n - 10];
    } else if (n >= 21 && n <= 29) {
        return 'huszon' + ones[n % 10];
    } else {
        return tens[Math.floor(n / 10)] + ones[n % 10];
    }
}

function convert(n: number): string {
    if (n < 0) return 'mínusz ' + convertMillions(Math.abs(n));
    return n === 0 ? 'nulla' : convertMillions(n);
}

export { convert as numberToWordHun };