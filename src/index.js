Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = function(object) {
  return /(Map|Set)\]$/.test(Object.prototype.toString.call(object))
    ? object.size === 0
    : typeof object == "string"
        ? !object
        : typeof object != "object" ||
            !object ||
            object.length === 0 ||
            Object.keys(object).length === 0;
};
