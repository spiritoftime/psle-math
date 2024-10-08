alter table "public"."lectureprogress" drop column "name";

alter table "public"."lectureprogress" add column "children" text[];

alter table "public"."lectureprogress" add column "parent" text;

alter table "public"."lectureprogress" add column "title" text;

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.prevent_user_id_update()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
  IF NEW.user_id IS DISTINCT FROM OLD.user_id THEN
    RAISE EXCEPTION 'Changing user_id is not allowed';
  END IF;
  RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.set_user_id()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$BEGIN
  NEW.user_id = auth.uid();
  RETURN NEW;
END;$function$
;


CREATE TRIGGER prevent_user_id_update_trigger BEFORE UPDATE ON public.lectureprogress FOR EACH ROW EXECUTE FUNCTION prevent_user_id_update();

CREATE TRIGGER set_user_id_trigger BEFORE INSERT ON public.lectureprogress FOR EACH ROW EXECUTE FUNCTION set_user_id();


