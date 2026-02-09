package com.app.trycatch.common.enumeration.skillLog;

import java.util.Arrays;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public enum SkillLogFileType {
    THUMBNAIL("thumbnail"), IMAGE("image"), ATTACHMENT("attachment");

    private String value;
    private static final Map<String, SkillLogFileType> SKILL_LOG_FILE_TYPE_MAP = Arrays.stream(SkillLogFileType.values())
            .collect(Collectors.toMap(SkillLogFileType::getValue, Function.identity()));

    private SkillLogFileType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }
}
