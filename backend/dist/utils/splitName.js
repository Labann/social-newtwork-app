export default function splitName(fullName) {
    const parts = fullName.trim().split(/\s+/);
    return {
        first_name: parts[0] || "",
        last_name: parts.slice(1).join(" ") || "",
    };
}
//# sourceMappingURL=splitName.js.map