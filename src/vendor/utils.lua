function table.deepcopy(orig)
    local orig_type = type(orig)
    local copy
    if orig_type == "table" then
        copy = {}
        for orig_key, orig_value in next, orig, nil do
            copy[table.deepcopy(orig_key)] = table.deepcopy(orig_value)
        end
        setmetatable(copy, table.deepcopy(getmetatable(orig)))
    else -- number, string, boolean, etc
        copy = orig
    end
    return copy
end

function table.merge(first, second)
    local copy = table.deepcopy(first)
    for k, v in pairs(second) do
        copy[k] = v
    end
    return copy
end

-- TODO better json encode
-- table.json_encode(obj)

function printf(format, ...)
    print(format:format(...))
end

function sprintf(format, ...)
    return format:format(...)
end
