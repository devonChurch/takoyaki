'use strict';

function override(update, open, close, data) {

    const start = data.indexOf(open) + open.length;
    const end = data.indexOf(close);

    const top = data.substr(0, start);
    const bottom = data.substr(end);

    return `${top}${update}${bottom}`;

}

module.exports = override;
