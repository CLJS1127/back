package com.app.trycatch.domain.skilllog;

import com.app.trycatch.common.enumeration.skillLog.SkillLogFileType;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Getter
@ToString(callSuper = true)
@EqualsAndHashCode(of = "id")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class SkillLogFileVO {
    private Long id;
    private Long skillLogId;
    private SkillLogFileType skillLogFileType;
}
