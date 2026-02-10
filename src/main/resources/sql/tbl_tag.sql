-- ============================================================
create table tbl_tag
(
    id               bigint unsigned auto_increment primary key comment '태그 ID',
    tag_name         varchar(100) not null unique comment '태그명',
    created_datetime datetime default current_timestamp,
    updated_datetime datetime default current_timestamp
) comment '기술 블로그 태그';

select * from tbl_tag;