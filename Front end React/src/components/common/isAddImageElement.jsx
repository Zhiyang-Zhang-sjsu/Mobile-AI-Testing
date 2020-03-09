const addElement = (imgLink) => {
    // 需要指定key 不重复，否则会报警告
    return <img src={imgLink} style={{width:'10%'}}/>;
};

const isAddImageElement = (data) => {
    if (typeof(data) === 'string' && rows.indexOf("imageLink => ") === -1 || typeof(data) === 'object') {
        return data;
    }

    if (typeof(data) === 'string' && data.search("imageLink => ") !== -1 ) {
        return addElement(rows.substring("imageLink => ".length, rows.length));
    }
}
 
export default isAddImageElements;