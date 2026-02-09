package com.app.trycatch.dto.skilllog;

import com.app.trycatch.domain.skilllog.TagVO;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
public class TagDTO {
    private Long id;
    private String tagName;
    private String createdDatetime;
    private String updatedDatetime;

    public TagVO toVO() {
        return TagVO.builder()
                .id(id)
                .tagName(tagName)
                .createdDatetime(createdDatetime)
                .updatedDatetime(updatedDatetime)
                .build();
    }
}
