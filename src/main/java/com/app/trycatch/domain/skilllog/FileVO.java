package com.app.trycatch.domain.skilllog;

import com.app.trycatch.audit.Period;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Getter
@ToString(callSuper = true)
@EqualsAndHashCode(of = "id")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@SuperBuilder
public class FileVO extends Period {
    private Long id;
    private String fileTargetType;
    private Long fileTargetId;
    private String fileName;
    private String filePath;
    private int fileSize;
}
